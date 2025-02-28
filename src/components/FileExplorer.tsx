import { SimpleTreeView, TreeItem2 } from "@mui/x-tree-view";
import { getFileNameFromPath, samples } from "../samples";
import { SyntheticEvent } from "react";

interface FileExplorerProps {
  selectedFile: string | undefined;
  setSelectedFile: (path: string) => void;
}

const FileExplorer = (props: FileExplorerProps) => {
  const onSelect = (_: SyntheticEvent<Element, Event>, itemId: string) => {
    props.setSelectedFile(itemId);
  }

  return (
    <SimpleTreeView sx={{ textWrap: "nowrap" }} onItemSelectionToggle={onSelect} selectedItems={props.selectedFile}>
      <TreeItem2 itemId="0" label="CQL Files">
        {samples.filesPath.map((path) => (
          <TreeItem2
            key={path}
            itemId={path}
            label={getFileNameFromPath(path)}
          />
        ))}
      </TreeItem2>
    </SimpleTreeView>
  );
};

export default FileExplorer;
