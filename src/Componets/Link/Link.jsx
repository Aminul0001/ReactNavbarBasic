import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        
            <a href={route.path}>{route.label}</a>
       
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;