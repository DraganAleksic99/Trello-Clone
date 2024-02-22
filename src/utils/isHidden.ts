import { TDragItem } from "../DragItem";

export const isHidden = (
    draggedItem: TDragItem | null,
    itemType: string,
    id: string,
    isPreview?: boolean
): boolean => {
    return Boolean(!isPreview && draggedItem && draggedItem.type === itemType && draggedItem.id === id);
}