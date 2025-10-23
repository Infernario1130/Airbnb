import { create } from "zustand";

interface SearchModalService {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void
}

const useSearchModal = create<SearchModalService> ((set)=> ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSearchModal