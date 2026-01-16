import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:flex-shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-[#c97a5a] to-[#d98a3d] text-primary-foreground hover:from-[#c97a5a]/90 hover:to-[#d98a3d]/90 shadow-sm hover:shadow-md transition-all',
        destructive:
          'bg-gradient-to-r from-red-600 to-red-500 text-destructive-foreground hover:from-red-600/90 hover:to-red-500/90 shadow-sm hover:shadow-md transition-all',
        outline:
          'border-2 border-[#c97a5a] bg-background bg-gradient-to-r from-[#c97a5a] to-[#d98a3d] bg-clip-text text-transparent hover:border-[#d98a3d] hover:from-[#d98a3d] hover:to-[#c97a5a] transition-all hover:shadow-sm [&_svg]:!text-[#c97a5a] hover:[&_svg]:!text-[#d98a3d] [&_svg]:!opacity-100',
        secondary:
          'bg-gradient-to-r from-[#e8e3dc] to-[#f0ebe4] text-secondary-foreground hover:from-[#e8e3dc]/90 hover:to-[#f0ebe4]/90 shadow-sm hover:shadow-md transition-all',
        ghost:
          'bg-gradient-to-r from-transparent to-transparent hover:from-primary/10 hover:to-accent/10 text-foreground hover:text-primary transition-all',
        link: 'bg-gradient-to-r from-[#c97a5a] to-[#d98a3d] bg-clip-text text-transparent underline-offset-4 hover:underline transition-all [&_svg]:!text-[#c97a5a] hover:[&_svg]:!text-[#d98a3d] [&_svg]:!opacity-100',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
