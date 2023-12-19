import React from 'react'
import withDateTimePretty from './DateTimePretty'
import DateTime from './DateTime'

const DateTimePretty = withDateTimePretty(DateTime);


export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}