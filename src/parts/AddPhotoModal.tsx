import { Button, Divider, IconButton, Modal } from "@mui/material"
import { modalStyle } from "../global"
import { Box } from "@mui/system"
import { Close, Delete, Replay } from "@mui/icons-material"
import ImageUploading, { ImageListType } from 'react-images-uploading'
import { useState } from "react"

interface Props {
    state: PrepareExamReducer
    dispatch: Function
}



export default ({ state, dispatch }: Props) => {
    const handleClose = () => {
        dispatch({ addModal: false })
    }
    const [images, setImages] = useState<ImageListType>([]);
    const maxNumber = 69;

    const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return <Modal open={state.addModal} onClose={handleClose} >
        <Box sx={modalStyle}>
            <div className="p-2 flex items-center justify-between">
                <span className="text-xl">Upload Photo</span>
                <IconButton onClick={handleClose}>
                    <Close />
                </IconButton>
            </div>
            <Divider />
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="dataURL"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="flex flex-col mt-2 h-[20rem] overflow-y-auto hide-scrollbar">
                        <div className="flex flex-col justify-center items-center">
                            <button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                className="border-2 rounded-lg px-5 pt-2 pb-3 text-xl hover:bg-gray-500 hover:text-white"
                            >
                                Click or Drop here

                            </button>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ mt: 1, textTransform: "capitalize", px: 2.5, fontSize: 18 }}
                                onClick={onImageRemoveAll}
                            >
                                Remove all images
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-around items-center gap-x-2 mt-2 mb-10 px-2 gap-y-4">
                            {imageList.map((image, index) => (
                                <div key={index} className="flex flex-col">
                                    <img className="rounded-lg" src={image.dataURL} alt="" height={50} width={100} />
                                    <div className="flex items-center justify-center">
                                        <IconButton
                                            color="primary"
                                            onClick={() => onImageUpdate(index)}>
                                            <Replay />
                                        </IconButton>
                                        <IconButton
                                            color="error"
                                            onClick={() => onImageRemove(index)}>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </ImageUploading>
            <div className="flex border-t fixed w-full bottom-0 rounded-b-lg bg-white justify-between p-2">
                <Button onClick={handleClose} variant="contained">Close</Button>
                <Button onClick={handleClose} variant="contained" color="success">Submit</Button>
            </div>
        </Box>
    </Modal>
}