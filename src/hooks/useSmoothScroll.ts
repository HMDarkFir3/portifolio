import { useCallback } from 'react';

import { links } from '@/utils/links';

type ElementsId = 'about' | 'experience' | 'projects' | 'contact';

export function useSmoothScroll() {
  const onScrollTo = useCallback(
    (elementId: string | ElementsId, offset = 0) => {
      const element = document.getElementById(elementId);

      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  return { onScrollTo };
}
