import React from 'react';
import { Card } from '../card/card.component'

import './card-list.style.css';

// props sono i parametri che vengono passati
// quando istanzi un componente es. <CardList param1="val1" />

// props.children invece è quello che ci metti in mezzo
// esempio <CardList param1="val1"><h1>Ciao</h1></Cardlist>
// in questo caso <h1>Ciao</h1>

export const CardList = props => (
    <div className="card-list">
        {
            props.monsters.map(
                    monster => (
                        <Card key={monster.id} monster={monster} />
                    )
                )
        }
    </div>
);