import clsx from 'clsx'

const styles = {
  primary:
    'inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-playfair text-5xl tracking-tight text-transparent',
  secondary:
    'inline bg-gradient-to-r from-primary-accent via-sky-400 to-primary-accent bg-clip-text text-5xl tracking-tight text-transparent',
}

export const GradientSectionTitle = ({ text, variant = 'primary' }) => (
  <h2 className={clsx(styles[variant], 'font-extrabold leading-none')}>
    {text}
  </h2>
)
