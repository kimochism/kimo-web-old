import styled from "vue-styled-components";

const Overlay = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 9998;
`;

const isMobile = () => {

    return screen.width <= 768 ? true : false;
};

const Modal = styled('div', {dimensions: Object})`
    min-width: ${ props => isMobile() ? '90%': props.dimensions.width };
    max-height: ${ props => isMobile() ? '80vh' : props.dimensions.height };
    overflow-y: auto;
    position: fixed;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    transition: 1s ease-in-out;
    z-index: 9999;
`;

const Header = styled.div`
    border-bottom: 1px solid lightgray;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .title {
        width: 100%;
        text-align: center;
        font-size: 20px;
    }

    .material-icons {
        position: absolute;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.4s ease-in-out;
    }

    .material-icons:hover{
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const Content = styled.div`
    width: 100%;
    max-height: 75%;

    .material-icons {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        transition: 0.4s ease-in-out;
    }
    
    .material-icons:hover{
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const Footer = styled.div`
    border-top: 1px solid lightgray;
    width: 100%;
`;

export {
    Overlay,
    Modal,
    Header,
    Content,
    Footer
};