import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingContactBar = () => {
  const [showNotification, setShowNotification] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play notification sound
  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(err => console.log('Audio play prevented:', err));
    }
  };

  useEffect(() => {
    // Create audio element for notification sound
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQcpntjemXggMqDV3Z6BKyqexdaQdTk6m73GgG1DQ5uxuHRmTUySpqptYlNPjpqaYWBUTYeOkFtgVkx8gIVXXVdMcHZ8UlpYTGZsdE9XWUtdZmxNVVhJWGNpS1NYSFZhZ0tTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBmSlNXSFVgZkpTV0hVYGZKU1dIVWBm');

    // Show notification after 2 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
      playNotificationSound();
    }, 2000);

    // Auto-hide notification after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const contactLinks = [
    {
      name: 'Telegram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      href: 'https://t.me/vikaboroday',
      color: 'bg-[#0088cc]',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: 'https://wa.me/923166431649',
      color: 'bg-[#25D366]',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:contact@vikileads.co',
      color: 'bg-primary',
      showTooltip: true,
      tooltipText: 'contact@vikileads.co',
    },
    {
      name: 'Live Chat',
      icon: <MessageCircle className="w-5 h-5" />,
      onClick: () => {
        if (window.$crisp) {
          window.$crisp.push(['do', 'chat:open']);
        }
      },
      color: 'bg-[#4A90D9]',
    },
  ];

  const openLiveChat = () => {
    if (window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
    setShowNotification(false);
  };

  return (
    <>
      {/* Floating Contact Bar */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {contactLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {link.onClick ? (
              <button
                onClick={link.onClick}
                className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl`}
                title={link.name}
              >
                {link.icon}
              </button>
            ) : link.showTooltip ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl`}
                  >
                    {link.icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-card border-border text-foreground">
                  <p className="text-sm font-medium">{link.tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl`}
                title={link.name}
              >
                {link.icon}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-20 z-50 max-w-xs"
          >
            <div className="bg-card border border-border rounded-xl p-4 shadow-2xl">
              <button
                onClick={() => setShowNotification(false)}
                className="absolute -top-2 -right-2 bg-muted rounded-full p-1 hover:bg-muted/80 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-2 shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    👋 Welcome to VikiLeads!
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Join live chat for <span className="text-primary font-semibold">100 FREE leads</span>
                  </p>
                  <button
                    onClick={openLiveChat}
                    className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Start Chat Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Add type declaration for Crisp
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export default FloatingContactBar;
