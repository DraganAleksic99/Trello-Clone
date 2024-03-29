import { createContext, useContext, Dispatch } from "react";
import { Task, List, TAppState, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { TDragItem } from "../DragItem";


const appData: TAppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
    draggedItem: TDragItem | null
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = ({children}: React.PropsWithChildren) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);

    const {draggedItem, lists} = state;

    const getTasksByListId = (id: string) => {
        return lists.find(list => list.id === id)?.tasks || [];
    }

    return <AppStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch}}>
        { children }
    </AppStateContext.Provider>
}

export const useAppState = () => {
    return useContext(AppStateContext);
}