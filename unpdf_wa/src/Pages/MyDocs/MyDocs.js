import * as React from 'react';
import { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { getDocumentsUser, uploadDocuments } from './queries/axios';
import './MyDocs.css';
import { Grid, ImageListItem, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MyDocs() {

    const baseStorageUrl = "https://storage.googleapis.com/unpdf_st/"

    const [userDocuments, setUserDocuments] = useState([])
    const [currentDocument, setCurrentDocument] = useState({})

    const auxGetDocumentsUser = async () => {
        // PUT ME AGAIN var user = localStorage.getItem("id")
        var user = "Johan"
        var aux = await getDocumentsUser(user)
        setUserDocuments(aux.documents_user)
    }

    const handleFiles = files => {
        var full_name = files["fileList"][0]["name"];
        var full_type = files["fileList"][0]["type"];
        var name = full_name.substring(0, full_name.lastIndexOf('.'));
        var type = full_type.substring(full_type.lastIndexOf('/') + 1);
        // PUT ME AGAIN var user = localStorage.getItem("id")
        var user = "Johan"
        var base64_data = files["base64"]
        var file = base64_data.substring(base64_data.indexOf(",") + 1)
        uploadDocuments(name, type, user, file);
    }
    // black magic stack overflow [https://stackoverflow.com/questions/69383051/dynamically-adjust-imagelist-columns-based-on-screen-size?noredirect=1&lq=1]
    const ImageGalleryList = styled('ul')(({ theme }) => ({
        display: 'grid',
        padding: 0,
        margin: theme.spacing(0, 4),
        gap: 8,
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)'
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)'
        },
    }));
    // black magic stack overflow 

    return (<>
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <Grid item xs={12} align="center">
                <h2>Documents</h2>
            </Grid>
            <Grid item xs={12} md={1} align="center">
                <ReactFileReader base64={true} handleFiles={handleFiles}>
                    <Button variant="contained">Upload</Button>
                </ReactFileReader>
            </Grid>
            <Grid item xs={12} md={3} align="center">
                <Button variant="contained" onClick={auxGetDocumentsUser} disableElevation>Mostrar documentos</Button>
            </Grid>
            <Box width="100%" />
            <Grid item xs={12} md={6} align="center" justifyContent="center">
                <ImageGalleryList  cols={3} rowHeight={100}>
                    {userDocuments && userDocuments.map(document => {
                        if (document.type === "jpg" || document.type === "jpeg" || document.type === "png")
                            return (
                                <Box sx={{ minWidth: 275 }}>
                                    <Card>
                                        <CardContent>
                                            <ImageListItem key={document.storage}>
                                                <img
                                                    className='img-document'
                                                    src={baseStorageUrl + document.storage}
                                                    alt={document.name}
                                                    loading="lazy" />
                                            </ImageListItem>
                                        </CardContent>
                                    </Card>
                                </Box>
                            )
                        return (<>
                            <Box sx={{ minWidth: 275 }}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {document.name + "." + document.type}
                                        </Typography>
                                        <Typography variant="body2">
                                            no es una imagen
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={baseStorageUrl + document.storage}>Link</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </>)
                    })
                    }
                </ImageGalleryList>
            </Grid>
        </Grid>
    </>);
}