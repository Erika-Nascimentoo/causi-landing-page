import { useEffect } from 'react';

export const useAutoUTM = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const STORAGE_KEY = 'causi_utm_data';

        // Função para salvar no localStorage
        const saveToStorage = (data: { source: string, medium: string, campaign: string }) => {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                ...data,
                timestamp: Date.now()
            }));
        };

        // Função para recuperar do localStorage
        const getFromStorage = () => {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return null;
            try {
                const data = JSON.parse(stored);
                if (Date.now() - data.timestamp > 30 * 24 * 60 * 60 * 1000) {
                    localStorage.removeItem(STORAGE_KEY);
                    return null;
                }
                return data;
            } catch (e) {
                return null;
            }
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
        if (!params.has('utm_source')) {
            const storedData = getFromStorage();
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
