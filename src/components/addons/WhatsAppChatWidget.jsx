'use client'

export default function WhatsAppChatWidget() {
    return (
        <a
            href="https://wa.me/2348149355727?text=Hi! I'm interested in creating a website."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 animate-bounce"
            style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.3)" }}
        >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.52 3.48A12 12 0 003.48 20.52l-1.1 4.02a1 1 0 001.22 1.22l4.02-1.1A12 12 0 0020.52 3.48z" fill="#fff" /><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.148-.668.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.668-1.612-.915-2.207-.242-.579-.487-.5-.668-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.213 3.075.149.198 2.099 3.205 5.077 4.372.711.245 1.263.391 1.695.5.712.181 1.36.155 1.872.094.571-.067 1.758-.719 2.008-1.413.25-.694.25-1.288.174-1.413-.075-.124-.273-.198-.57-.347z" fill="#25D366" /></svg>
            <span className="font-bold">Chat</span>
        </a>
    );
}
