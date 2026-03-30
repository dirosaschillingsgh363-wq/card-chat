// card-chat 轻量运行时
(function () {
    'use strict';

    // ===== 数据层 =====
    const STORAGE_KEY = 'cardChatData';

    window.db = {};

    function loadData() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) window.db = JSON.parse(raw);
        } catch (e) { }
    }

    window.saveData = function () {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(window.db));
        } catch (e) { }
    };

    // ===== 屏幕切换 =====
    window.switchScreen = function (id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    };

    // ===== Toast =====
    window.showToast = function (msg, duration) {
        const existing = document.querySelector('.cc-toast');
        if (existing) existing.remove();
        const toast = document.createElement('div');
        toast.className = 'cc-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => { toast.classList.add('show'); }, 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration || 2000);
    };

    // ===== 初始化 =====
    loadData();

    document.addEventListener('DOMContentLoaded', async function () {
        switchScreen('card-chat-screen');

        // 尝试通过 HTTP 加载外部预设（HTTP 服务器模式下有效）
        if (!db.cardChat || !db.cardChat.conversations || db.cardChat.conversations.length === 0) {
            try {
                const res = await fetch('./presets/default.json');
                if (res.ok) window._pendingPreset = await res.json();
            } catch (e) { /* file:// 协议下 fetch 被阻止，card_chat.js 会使用内嵌预设 */ }
        }

        if (typeof setupCardChat === 'function') setupCardChat();
    });
})();
