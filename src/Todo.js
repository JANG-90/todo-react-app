import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, checkbox} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

const Todo = (Props) => {
    const [item,setItem]=useState(Props.item);

    return(
        <ListItem>
            <CheckBox checked={item.done}/>
            <ListItemText>
                <InputBase inputProps={{ "aria-label": "naked" }} type="text" id={item.id} name={item.id} value={item.title} multiline={true} fullWidth={true} />
            </ListItemText>
        </ListItem>
    );
};

export default Todo;