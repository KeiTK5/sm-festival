import React from 'react';

function Track(props) {
    return (
        <div className="box-track-list">
            <div className="box-text-gradient">
                <div className="text-track">Track List</div>
            </div>
            <div className="list-track">
                <div className="box-text-gradient border-small">
                    <div className="item-track">
                        <div className="id-track">
                            1
                        </div>
                        <div className="name-track">
                            Savage
                        </div>
                        <div className="time-track">
                            2’54”
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Track;