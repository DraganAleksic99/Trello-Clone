import styled from 'styled-components';

interface IDragPreviewContainerProps {
    isHidden?: boolean
    isPreview?: boolean
}

type TAddItemButtonProps = {
    dark?: boolean
}

type TDragPreviewWrapperProps = {
    position: {
        x: number
        y: number
    }
}

export const AppContainer = styled.div`
    background-color: #3179ba;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    height: 100vh;
    padding: 20px;
    width: 100%;
`

export const DragPreviewContainer = styled.div<IDragPreviewContainerProps>`
    transform: ${props => (props.isPreview ? "rotate(0deg)" : undefined)};
    opacity: ${props => (props.isHidden ? 0 : 1)};
`

export const ColumnContainer = styled(DragPreviewContainer)`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
    cursor: pointer;
`

export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

export const CardContainer = styled(DragPreviewContainer)`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
    &:hover {
        transform: scale(1.02);
      }
`

export const AddItemButton = styled.button<TAddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 3px;
    border: none;
    color: ${props => (props.dark ? "#000" : "#fff")};
    cursor: pointer;
    max-width: 300px;
    padding: 10px 12px;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
      background-color: #ffffff52;
    }
`

export const NewItemFormContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
`

export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 8px;
    border: none;
    box-shadow: none;
    color: #fff;
    padding: 4px 12px;
    text-align: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.03);
      }
`

export const NewItemInput = styled.input`
    border-radius: 3px;
    border: none;
    box-shadow: #091e4240 0px 1px 0px 0px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`

export const CustomDragLayerContainer = styled.div`
    height: 100%;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

export const DragPreviewWrapper = styled.div.attrs<TDragPreviewWrapperProps>(({ position: { x, y } }) => ({
    style: {
        transform: `translate(${x}px, ${y}px)`
    }
    })
)<TDragPreviewWrapperProps>``