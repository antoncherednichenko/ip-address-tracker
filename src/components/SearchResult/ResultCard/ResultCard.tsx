import { Card, List, ListItem, Typography } from '@mui/material'
import { useAppSelector } from '../../../hooks'
import { ILocation } from '../../../types/searchSliceTypes'

import s from './ResultCard.module.scss'

interface IResultCardProps {
    ip?: string
    isp?: string
    location?: ILocation
}

const ResultCard = ({ ip, isp, location }: IResultCardProps) => {

    return (
        <Card sx={{ width: '100%', maxWidth: '950px', margin: '0 auto' }}>
            <List className={s.card__content}>
                <ListItem sx={{display: 'block'}} className={s.card__value}>
                    <Typography
                        align="left"
                        variant="h6"
                    >
                        IP ADDRESS
                    </Typography>
                    <Typography sx={{fontWeight: 'bold'}} variant="body1">
                        {ip || '-'}
                    </Typography>
                </ListItem>
                <ListItem sx={{display: 'block'}} className={s.card__value}>
                    <Typography align="left"variant="h6">
                        LOCATION
                    </Typography>
                    <Typography sx={{fontWeight: 'bold'}} variant="body1">
                        {location ? (
                            <>
                                {location?.country ? <span>{location.country}, </span> : ''}
                                {location?.city ? <span>{location.city}, </span> : ''}
                                {location?.postalCode ? <span>{location.postalCode}</span> : ''}
                            </>
                        ) : '-'}
                    </Typography>
                </ListItem>
                <ListItem sx={{display: 'block'}} className={s.card__value}>
                    <Typography align="left" variant="h6">
                        TIME ZONE
                    </Typography>
                    <Typography sx={{fontWeight: 'bold'}} variant="body1">
                        {location?.timezone || '-'}
                    </Typography>
                </ListItem>
                <ListItem sx={{display: 'block'}} className={s.card__value}>
                    <Typography align="left"variant="h6">
                        ISP
                    </Typography>
                    <Typography sx={{fontWeight: 'bold'}} variant="body1">
                        {isp || '-'}
                    </Typography>
                </ListItem>
            </List>
        </Card>
    )
}

export default ResultCard