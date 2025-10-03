import { create } from "zustand";

interface RentModalService {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalService>((set)=> ({
    isOpen:false,
    onOpen: () => set({isOpen:true}),
    onClose: () => set({isOpen:false})
}))


export default useRentModal