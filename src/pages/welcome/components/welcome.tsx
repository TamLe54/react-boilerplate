import { t } from 'i18next';

import TechsoftLogo from '/techsoft.ico';
import LucideLogo from '@/assets/logos/lucide.svg';
import ReactHookFormLogo from '@/assets/logos/react-hook-form.svg';
import ShadcnLogo from '@/assets/logos/shadcn.png';
import TailwindCssLogo from '@/assets/logos/tailwindcss.svg';
import TanstackLogo from '@/assets/logos/tanstack.png';
import ViteLogo from '@/assets/logos/vite.svg';
import VitestLogo from '@/assets/logos/vitest.png';
import ZustandLogo from '@/assets/logos/zustand.svg';
import ReactLogo from '@/assets/react.svg';

import { FormExample } from './form-example';
import { ModalExample } from './modal-example';
import { TableExample } from './table-example';
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
      <div className="flex w-full gap-5">
        <div className="flex-1">
          <TableExample />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex-1">
            <ModalExample />
          </div>
          <div className="flex-1">
            <FormExample />
          </div>
        </div>
      </div>
    </div>
  );
};
