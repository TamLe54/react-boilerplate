import { t } from 'i18next';

import TechsoftLogo from '/techsoft.ico';
import LucideLogo from '@/assets/logos/lucide.svg';
import ReactHookFormLogo from '@/assets/logos/react-hook-form.svg';
import ShadcnLogo from '@/assets/logos/shadcn-dark.png';
import TailwindCssLogo from '@/assets/logos/tailwindcss.svg';
import TanstackLogo from '@/assets/logos/tanstack.png';
import ViteLogo from '@/assets/logos/vite.svg';
import VitestLogo from '@/assets/logos/vitest.png';
import ZustandLogo from '@/assets/logos/zustand.svg';
import ReactLogo from '@/assets/react.svg';
import { ModeToggle } from '@/components';

import { ModalExample } from './modal-example';
import { ToolLogo } from './tools-logo';

export const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <div className="flex w-full flex-col items-center gap-2">
        <img src={TechsoftLogo} alt="techsoft" className="aspect-square w-20" />
        <h1 className="text-2xl font-bold">{t('pages.welcome.title')}</h1>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-fit gap-10 rounded-md border-2 border-solid border-border p-5">
          <ToolLogo logoName={t('common.tools.vite.name')} logoSrc={ViteLogo} logoUrl="https://vitejs.dev/" />
          <ToolLogo logoName={t('common.tools.vitest.name')} logoSrc={VitestLogo} logoUrl="https://vitest.dev/" />
          <ToolLogo logoName={t('common.tools.tanstack.name')} logoSrc={TanstackLogo} logoUrl="https://tanstack.com/" />
          <ToolLogo
            logoName={t('common.tools.react-hook-form.name')}
            logoSrc={ReactHookFormLogo}
            logoUrl="https://www.react-hook-form.com/"
          />
          <ToolLogo logoName={t('common.tools.reactjs.name')} logoSrc={ReactLogo} logoUrl="https://react.dev/" />
          <ToolLogo logoName={t('common.tools.lucide.name')} logoSrc={LucideLogo} logoUrl="https://lucide.dev/icons/" />
          <ToolLogo logoName={t('common.tools.shadcn.name')} logoSrc={ShadcnLogo} logoUrl="https://ui.shadcn.com/" />
          <ToolLogo
            logoName={t('common.tools.tailwindcss.name')}
            logoSrc={TailwindCssLogo}
            logoUrl="https://tailwindcss.com/"
          />
          <ToolLogo
            logoName={t('common.tools.zustand.name')}
            logoSrc={ZustandLogo}
            logoUrl="https://zustand-demo.pmnd.rs/"
          />
        </div>
      </div>
      <ModalExample />
      <div className="fixed right-4 top-2">
        <ModeToggle />
      </div>
    </div>
  );
};
