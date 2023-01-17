import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DeleteIcon from "@mui/icons-material/Delete";

export const Note = (props) => {
  return (
    <ListItem
      style={{ background: "#D3D3D3" }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar style={{ background: "green" }}>
          <PublishedWithChangesIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Lorem Ipsum"
        secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
      />
    </ListItem>
  );
};
