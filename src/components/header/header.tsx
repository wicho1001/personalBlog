import { component$, useContext, useStyles$, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import { QwikLogo } from '../starter/icons/qwik';
import styles from './header.module.css';
import { colorSchemeChangeListener, getColorPreference, setPreference, ThemeToggle } from '../theme-toggle/theme-toggle';
import { CTX } from '~/context';

export default component$(() => {
  
  const globalStore:any = useContext(CTX);
  useVisibleTask$(() => {
    globalStore.theme = getColorPreference();
    return colorSchemeChangeListener((isDark) => {
      globalStore.theme = isDark ? 'dark' : 'light';
      setPreference(globalStore.theme);
    });
  });
  return (
    <header class={styles.header}>
      
      <div class={styles.logo}>
        <a href="/" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ThemeToggle/>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
