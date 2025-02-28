import { Card, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography } from "@mui/material"
import ReactSHighExample, { ReactSHighStyle, ReactSHighStyles } from "./components/viewers/ReactSHighExample"
import * as colors from "@mui/material/colors"
import FileExplorer from "./components/FileExplorer"
import { useState } from "react"
import { getFileContentByPath, getFileNameFromPath } from "./samples"

const App = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [fileContent, setFileContent] = useState<string>("");
  const [style, setStyle] = useState<string>();

  const onFileSelect = async (path: string) => {
    const content = await getFileContentByPath(path);
    setFileContent(content);
    setSelectedFile(path);
  }

  return (
    <Stack p={4} gap={3} sx={{ bgcolor: colors.grey[50] }} height="100vh">
      <Typography variant="h4">
        CQL Viewer
      </Typography>
      <Paper elevation={6}>
        <Stack direction="row" p={2} height={700}>
          <Card variant="outlined" sx={{ width: 300}}>
            <FileExplorer setSelectedFile={onFileSelect} selectedFile={selectedFile} />
          </Card>
          <Stack width="100%">
            <Stack direction="row" gap={10} alignItems="center" justifyContent="space-between" paddingRight={4}>
              <Typography variant="subtitle1" paddingLeft={3}>
                {selectedFile && getFileNameFromPath(selectedFile)}
              </Typography>
              {selectedFile && (
                <FormControl sx={{ width: 200 }} size="small">
                  <InputLabel >Style</InputLabel>
                  <Select value={style} onChange={(e) => setStyle(e.target.value)}>
                    {ReactSHighStyles.map((style) => (
                      <MenuItem key={style} value={style}>{style}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Stack>
            <ReactSHighExample style={style as ReactSHighStyle}>
              {fileContent}
            </ReactSHighExample>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  )
}

export default App
