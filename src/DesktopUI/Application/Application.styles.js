const styles = {
    application: {
        position: 'absolute',
        overflow: 'auto',
        background: '#F2F2F2',
        boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.45)',
        resize: 'both',
        transition: 'width 350ms, height 350ms'
    },
    barArea: {
        position: 'relative'
    },
    barMask: {
        position: 'absolute',
        top: '0',
        left: '50%',
        marginLeft: '-125px',
        width: '250px',
        height: '45px',
        zIndex: '2',
        cursor: 'move'
    },
    appArea: {
        resize: 'both'
    }
};

export default styles;
