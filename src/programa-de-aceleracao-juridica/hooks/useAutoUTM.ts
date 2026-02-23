import { useEffect } from 'react';

export const useAutoUTM = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const COOKIE_NAME = 'causi_utm_data';

        // Função para salvar nos cookies (compartilhado entre subdomínios)
        const saveToStorage = (data: { source: string, medium: string, campaign: string }) => {
            const value = JSON.stringify({
                ...data,
                timestamp: Date.now()
            });
            
            // Define o domínio base para .causi.com.br se estiver em produção
            let domain = "";
            const host = window.location.hostname;
            if (host.includes("causi.com.br")) {
                domain = "; domain=.causi.com.br";
            }

            const expires = new Date();
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
            
            document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}${domain}; path=/; SameSite=Lax`;
        };

        // Função para recuperar dos cookies
        const getFromStorage = () => {
            const nameEQ = COOKIE_NAME + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) {
                    try {
                        const value = decodeURIComponent(c.substring(nameEQ.length, c.length));
                        return JSON.parse(value);
                    } catch (e) {
                        return null;
                    }
                }
            }
            return null;
        };

        // --- ESTRATÉGIA 1: ATALHO DE PERFIL (?p=nome) ---
        const profileMap: Record<string, { source: string, medium: string, campaign: string }> = {
            'jean': { source: 'instagram', medium: 'social', campaign: 'perfil_jean' },
            'vitor': { source: 'instagram', medium: 'social', campaign: 'perfil_vitor' },
            'causi': { source: 'instagram', medium: 'social', campaign: 'perfil_causi' },
            'jean_in': { source: 'linkedin', medium: 'social', campaign: 'perfil_jean' },
            'vitor_in': { source: 'linkedin', medium: 'social', campaign: 'perfil_vitor' },
        };

        const shortCode = params.get('p')?.toLowerCase();

        if (shortCode && profileMap[shortCode]) {
            const utmData = profileMap[shortCode];
            saveToStorage(utmData);
            
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('utm_source', utmData.source);
            newUrl.searchParams.set('utm_medium', utmData.medium);
            newUrl.searchParams.set('utm_campaign', utmData.campaign);
            newUrl.searchParams.delete('p');

            window.history.replaceState({}, '', newUrl.toString());
            return;
        }

        // --- ESTRATÉGIA 2: RECUPERAÇÃO DE MEMÓRIA (PERSISTÊNCIA) ---
        const storedData = getFromStorage();

        if (!params.has('utm_source')) {
            if (storedData) {
                const newUrl = new URL(window.location.href);
                newUrl.searchParams.set('utm_source', storedData.source);
                newUrl.searchParams.set('utm_medium', storedData.medium);
                newUrl.searchParams.set('utm_campaign', storedData.campaign);
                window.history.replaceState({}, '', newUrl.toString());
                return;
            }
        } else {
            saveToStorage({
                source: params.get('utm_source') || '',
                medium: params.get('utm_medium') || '',
                campaign: params.get('utm_campaign') || ''
            });
            return;
        }

        // --- ESTRATÉGIA 3: DETECÇÃO DE REFERRER (FALLBACK FINAL) ---
        // SÓ executa se não houver NADA na URL e NADA no Cookie
        if (storedData) return;

        const referrer = document.referrer;
        if (!referrer) return;

        let source = '';
        let medium = 'referral';

        if (referrer.includes('instagram.com')) {
            source = 'instagram';
            medium = 'social';
        } else if (referrer.includes('facebook.com')) {
            source = 'facebook';
            medium = 'social';
        } else if (referrer.includes('linkedin.com')) {
            source = 'linkedin';
            medium = 'social';
        } else if (referrer.includes('youtube.com')) {
            source = 'youtube';
            medium = 'social';
        } else if (referrer.includes('t.co') || referrer.includes('twitter.com') || referrer.includes('x.com')) {
            source = 'twitter';
            medium = 'social';
        } else if (referrer.includes('google.com')) {
            source = 'google';
            medium = 'organic';
        } else {
            try {
                const url = new URL(referrer);
                // Ignora se for qualquer subdomínio da causi
                if (url.hostname.includes('causi.com.br')) return;
                source = url.hostname.replace('www.', '').split('.')[0];
            } catch (e) {
                return;
            }
        }

        if (source) {
            const utmData = { source, medium, campaign: 'auto_tagged' };
            saveToStorage(utmData);
            
            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set('utm_source', source);
            newUrl.searchParams.set('utm_medium', medium);
            newUrl.searchParams.set('utm_campaign', utmData.campaign);

            window.history.replaceState({}, '', newUrl.toString());
        }
    }, []);
};
