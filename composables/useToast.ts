import { ref } from "vue";

export interface Toast {
  id: string;
  title?: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
}

const toasts = ref<Toast[]>([]);

export const useToast = () => {
  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const duration = toast.duration || 3000;

    toasts.value.push({
      id,
      title: toast.title,
      message: toast.message,
      type: toast.type || "info",
      duration,
    });

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    const index = toasts.value.findIndex((toast) => toast.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
};
