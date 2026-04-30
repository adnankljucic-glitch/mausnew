import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface Props {
  icon: React.ReactNode;
  headline: string;
  children: React.ReactNode;
  num?: string;
}

export default function MobileAccordionItem({ icon, headline, children, num }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="mob-acc-item">
      <div
        className="mob-acc-header"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKey}
      >
        <div className="mob-acc-left">
          {num && <span className="mob-acc-num">{num}</span>}
          <div className="mob-acc-icon">{icon}</div>
          <span className="mob-acc-headline">{headline}</span>
        </div>
        <span className="mob-acc-toggle" aria-hidden="true">
          {open ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="mob-acc-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mob-acc-body-inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
