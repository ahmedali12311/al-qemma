import { useEffect } from "react";

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [title, description]);
}
