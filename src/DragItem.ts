export type TColumnDragItem = {
    id: string
    text: string
    type: "COLUMN"
}

export type TCardDragItem = {
    id: string
    columnId: string
    text: string
    type: "CARD"
}    

export type TDragItem = TColumnDragItem | TCardDragItem;