import { cn, getGlobalCssVariable } from '@/utils/styles';
import './loading-screen.scss';

type LoadingProps = {
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  bgOpacity?: number | string;
  speedInSecond?: number;
  className?: string;
};

export const Loading = ({
  size = 150,
  strokeWidth = '3px',
  color = getGlobalCssVariable('--primary'),
  bgOpacity = 0,
  speedInSecond = 2,
  className,
}: LoadingProps) => {
  return (
    <div className={cn('flex min-h-[50vh] items-center justify-center', className)}>
      <svg
        className="loading-container"
        viewBox="0 0 40 40"
        height={size}
        width={size}
        style={{
          transformOrigin: 'center',
          animation: `rotate ${speedInSecond}s linear infinite`,
          willChange: 'transform',
          overflow: 'visible',
        }}
      >
        <circle
          className="loading-track"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth={strokeWidth}
          fill="none"
          style={{
            fill: 'none',
            stroke: color,
            opacity: bgOpacity,
            transition: `stroke 0.5s ease`,
          }}
        />
        <circle
          className="loading-car"
          cx="20"
          cy="20"
          r="17.5"
          pathLength="100"
          strokeWidth={strokeWidth}
          fill="none"
          style={{
            fill: 'none',
            stroke: color,
            strokeDasharray: '1 200',
            strokeDashoffset: '0',
            strokeLinecap: 'round',
            animation: `stretch calc(${speedInSecond}s * 0.75) ease-in-out infinite`,
            willChange: 'stroke-dasharray, stroke-dashoffset',
            transition: `stroke 0.5s ease`,
          }}
        />
      </svg>
    </div>
  );
};
