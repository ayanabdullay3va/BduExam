import * as React from 'react';
import "./shop.scss"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <>
            <div className='cardes'>
                <div className='cards'>
                    <div className='clothes-card'>
                        <Card sx={{ width: "350px" }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp"

                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Collection
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Women
                                </Typography>
                            </CardContent>

                        </Card>
                        <Card sx={{ width: "350px" }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp"

                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Collection
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Children
                                </Typography>
                            </CardContent>

                        </Card>
                        <Card sx={{ width: "350px" }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp"

                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Collection
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Women
                                </Typography>
                            </CardContent>

                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}