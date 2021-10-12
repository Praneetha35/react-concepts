import { useEffect } from "react";

const useTitleCount = (count) => {

    useEffect(() => {
        //Changing the title is out of the component scope and comes under browswer API. We use useEffect hook to fulfil accessing elements outside the scope
        if (count >= 1) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = `Chats`
        }
    }, [count])
}

export default useTitleCount;