import { markRaw } from "vue";
import { useModal } from "vue-final-modal";
import AuthModal from "../components/AuthModal.vue";

export function useAuthModal() {
  const { open, close } = useModal<{
    onClose: () => void;
  }>({
    component: markRaw(AuthModal) as any,
    attrs: {
      onClose() {
        close();
      },
    },
  });

  return { open, close };
}
