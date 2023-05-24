type Size = "sm" | "lg";

let height: number;
let width: number;

const setSize = (size: Size) => {
    if (size === "sm") {
        height = 30;
        width = 30;
    } else {
        height = 60;
        width = 60;
    }
}

export const ScissorLift = ({ size }: { size: Size }) => {
    setSize(size);
    return (
        <svg className="fill-content-dark-2" height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65" id="scissor-lift">
            <path d="M11.3 17.4h7.1c.3.3-.9-.4 11.8 5.9l-11.7 5.8c-.8.4-.8 1.7 0 2.1L30.3 37l-11.7 5.8c-.9.4-.5 1.7 0 2l7.9 5.3v.9h-8.6v-3.2c0-.6-.4-1-1-1s-1 .4-1 1c0 .1.1 9.3.1 8.7 0 .5.3.8.8 1-.5.7-.8 1.6-.8 2.6 0 2.5 2 4.5 4.5 4.5 1.6 0 2.9-.8 3.8-2H41c.8 1.2 2.2 2 3.8 2 2.5 0 4.5-2 4.5-4.5 0-1-.3-1.8-.8-2.6.4-.1.8-.5.8-1v-8.7c0-.6-.4-1-1-1s-1 .4-1 1V51h-8.5v-.9l7.8-5.2c.5-.3.9-1.6 0-2L34.8 37l11.7-5.8c.8-.4.8-1.7 0-2.1l-11.7-5.8c12.8-6.4 11.5-5.7 11.8-5.9h7c.6 0 1-.4 1-1V1.5c0-.6-.4-1-1-1H11.3c-.6 0-1 .4-1 1v14.9c0 .5.5 1 1 1zm9.1 45.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm4.5-2c0-.2.1-.3.1-.5 0-.9-.3-1.8-.8-2.5h16.7c-.5.7-.8 1.6-.8 2.5 0 .2 0 .4.1.5H24.9zm19.7 2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm2.5-7.1H17.9v-2.5c43.7.1-3.8 0 29.2 0v2.5zm-18.7-4.5V49h8.2v1.9h-8.2zm15.8-7-5.7 3.8c-.1-.4-.5-.6-.9-.6H27.4c-.4 0-.8.3-.9.7L20.8 44l11.7-5.8 11.7 5.7zM44 30.2l-11.5 5.7L21 30.2l11.5-5.7L44 30.2zm-11.5-8-9.7-4.8h19.4l-9.7 4.8zM12.3 2.5h40.3v12.9H12.3V2.5z"></path>
        </svg>
    )
}

export const FireTruck = ({ size }: { size: Size }) => {
    setSize(size);
    return (
        <svg className="fill-content-dark-2" height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" id="fire-truck">
            <path d="M78.43 38.893a2 2 0 0 1-2-2v-2.014a2 2 0 0 1 4 0v2.014a2 2 0 0 1-2 2zM67.844 46.36a1.993 1.993 0 0 1-1.419-.591l-1.414-1.424a2 2 0 1 1 2.838-2.818l1.414 1.424c1.222 1.229.325 3.409-1.419 3.409zm22.172 0c-1.743 0-2.641-2.18-1.419-3.409l1.414-1.424a2 2 0 0 1 2.838 2.818l-1.414 1.424a1.999 1.999 0 0 1-1.419.591zm4.975 28.551H80.893a2 2 0 0 1-2-2V61.173a2 2 0 0 1 4 0v9.738h12.099a2 2 0 0 1-.001 4z"></path>
            <path d="M121.587 74.097c-1.124-1.374-2.756-2.7-4.487-3.207l-6.906-2.02a7.052 7.052 0 0 1-2.71-1.509L91.192 52.774a9.507 9.507 0 0 0-3.763-2.072c.028-4.722-3.692-8.76-8.5-8.76-4.654 0-8.443 3.762-8.495 8.404h-.688a2 2 0 0 0-2 2v52.774H47.591a2 2 0 0 0 0 4h34.646a2 2 0 0 0 0-4H71.746V54.347h13.113c1.351 0 2.651.499 3.664 1.406l16.291 14.588a11.078 11.078 0 0 0 4.256 2.369l6.814 1.992a6.585 6.585 0 0 1 3.74 3.971h-1.537a2 2 0 0 0 0 4H120v4.564h-1.912a2 2 0 0 0 0 4H120v13.226a.648.648 0 0 1-.636.658h-3.085c-.955-6.706-6.611-11.879-13.443-11.879-7.499 0-13.6 6.226-13.6 13.879S95.338 121 102.837 121c6.832 0 12.488-5.172 13.443-11.879h3.085c2.557 0 4.636-2.09 4.636-4.658V80.867a10.72 10.72 0 0 0-2.414-6.77c-1.147-1.402 1.557 1.902 0 0zm-47.148-23.75a4.5 4.5 0 0 1 4.49-4.404 4.5 4.5 0 0 1 4.49 4.404h-8.98zM102.837 117c-5.293 0-9.6-4.432-9.6-9.879s4.307-9.879 9.6-9.879c5.294 0 9.601 4.432 9.601 9.879S108.131 117 102.837 117z"></path>
                <circle cx="32.04" cy="68.124" r="1.986"></circle>
                <circle cx="62.44" cy="81.122" r="1.987"></circle>
                <circle cx="39.76" cy="107.133" r="1.988"></circle>
            <path d="M80.457 17.062a1.999 1.999 0 0 0-2.818-.236l-6.505 5.496-9.008-9.662 7.43-6.115a1.997 1.997 0 0 0 .273-2.814 1.997 1.997 0 0 0-2.814-.273L1.092 57.713A2.045 2.045 0 0 0 0 59.486v47.636a2 2 0 0 0 2 2h5.878C8.833 115.828 14.488 121 21.32 121c7.499 0 13.6-6.226 13.6-13.879s-6.101-13.879-13.6-13.879c-6.832 0-12.487 5.172-13.442 11.879H4V83.107h51.136a2 2 0 0 0 0-4H34.035v-4.562a2 2 0 0 0-4 0v4.562H4V61.486s25.908.05 26.035.057v.14a2 2 0 0 0 4 0v-2.197c0-.182-.032-.355-.078-.523L80.221 19.88a2 2 0 0 0 .236-2.818zM21.32 97.242c5.293 0 9.6 4.432 9.6 9.879S26.613 117 21.32 117s-9.6-4.432-9.6-9.879 4.306-9.879 9.6-9.879zM7.662 57.486l11.358-9.348 9.144 9.348H7.662zm24.174-1.967-9.717-9.933 7.057-5.808 9.42 10.03-6.76 5.711zm9.821-8.296-9.385-9.992 6.858-5.644 9.524 9.726-6.997 5.91zm10.06-8.499-9.488-9.689 7.363-6.06 9.311 9.678-7.186 6.071zm10.249-8.659-9.276-9.641 6.34-5.218 9.043 9.699-6.107 5.16z"></path>
        </svg>
    )
}

export const Ambulance = ({ size }: { size: Size }) => {
    setSize(size)
    return (
        <svg className="fill-content-dark-2" height={height} width={width} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 64 64" viewBox="0 0 64 64" id="ambulance">
            <path d="M46.86 32.952c-.005 0-.013 0-.02 0H29.975c-.552 0-1-.448-1-1V20.007c0-.552.448-1 1-1h13.227c.44 0 .828.288.957.708l3.584 11.764c.075.141.118.302.118.473C47.86 32.504 47.413 32.952 46.86 32.952zM30.975 30.952h14.517l-3.03-9.945H30.975V30.952zM22.338 51.315c-.552 0-.999-.446-1-.998-.001-.552.446-1.001.998-1.002l19.34-.034c.001 0 .001 0 .002 0 .552 0 .999.446 1 .998.001.552-.446 1.001-.998 1.002l-19.34.034C22.339 51.315 22.338 51.315 22.338 51.315z"></path>
            <path d="M54.863 51.262c-.551 0-.998-.445-1-.997-.002-.552.444-1.001.996-1.003l2.215-.008c.36-.028.664-.154.859-.383.352-.411.319-1.073.319-1.08l-.004-12.621c0-.038.002-.076.007-.114.179-1.559-2.376-2.04-2.774-2.105h-7.828c-.553 0-1-.448-1-1s.447-1 1-1h7.902c.042 0 .084.002.126.008 1.712.218 4.852 1.388 4.567 4.264v12.483c.009.066.096 1.421-.795 2.464-.381.445-1.09.994-2.305 1.081l-2.282.01C54.865 51.262 54.864 51.262 54.863 51.262zM9.152 51.336C9.152 51.336 9.152 51.336 9.152 51.336c-2.596-.003-3.986-.043-4.783-.865-.689-.711-.658-1.688-.616-3.04.013-.41.028-.88.028-1.418V24.329c0-.384-.005-.734-.01-1.052-.023-1.572-.038-2.61.707-3.365.898-.911 2.318-.912 6.11-.906l32.613 0c.553 0 1 .448 1 1s-.447 1-1 1l-32.615 0c-2.438.001-4.375-.003-4.685.311-.156.159-.143 1.101-.13 1.931.004.327.01.687.01 1.081v21.684c0 .562-.015 1.053-.029 1.481-.02.636-.044 1.427.059 1.592.284.247 2.273.249 3.342.25.552 0 1 .449.999 1.001S9.704 51.336 9.152 51.336z"></path>
            <path d="M15.746 57.677c-4.191 0-7.601-3.409-7.601-7.599s3.41-7.599 7.601-7.599c4.19 0 7.599 3.409 7.599 7.599S19.936 57.677 15.746 57.677zM15.746 44.479c-3.088 0-5.601 2.512-5.601 5.599s2.512 5.599 5.601 5.599c3.087 0 5.599-2.512 5.599-5.599S18.833 44.479 15.746 44.479zM48.271 57.677c-4.19 0-7.6-3.409-7.6-7.599s3.409-7.599 7.6-7.599c4.189 0 7.599 3.409 7.599 7.599S52.461 57.677 48.271 57.677zM48.271 44.479c-3.088 0-5.6 2.512-5.6 5.599s2.512 5.599 5.6 5.599c3.087 0 5.599-2.512 5.599-5.599S51.358 44.479 48.271 44.479zM17.693 37.828c-.552 0-1-.448-1-1v-9.656c0-.552.448-1 1-1s1 .448 1 1v9.656C18.693 37.38 18.246 37.828 17.693 37.828z"></path>
            <path d="M22.521 33h-9.655c-.552 0-1-.448-1-1s.448-1 1-1h9.655c.552 0 1 .448 1 1S23.074 33 22.521 33zM26.88 21.007c-.552 0-1-.448-1-1v-2.979h-3.251v2.979c0 .552-.448 1-1 1s-1-.448-1-1v-3.979c0-.552.448-1 1-1h5.251c.552 0 1 .448 1 1v3.979C27.88 20.559 27.432 21.007 26.88 21.007zM27.302 13.337c-.219 0-.44-.072-.624-.219-.432-.345-.501-.974-.156-1.405l2.711-3.389c.345-.432.976-.501 1.405-.156.432.345.501.974.156 1.405l-2.711 3.389C27.886 13.208 27.595 13.337 27.302 13.337zM20.697 13.337c-.293 0-.584-.128-.781-.375l-2.71-3.389c-.345-.431-.275-1.061.156-1.405.431-.345 1.06-.275 1.405.156l2.71 3.389c.345.431.275 1.061-.156 1.405C21.137 13.265 20.916 13.337 20.697 13.337zM23.914 12.659c-.552 0-1-.448-1-1V7.323c0-.552.448-1 1-1s1 .448 1 1v4.336C24.914 12.211 24.466 12.659 23.914 12.659z"></path>
        </svg>
    )
}

export const Construction = ({ size }: { size: Size }) => {
    setSize(size);
    return (
        <div className="scale-125 fill-content-dark-2">
            <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 500 500" viewBox="0 0 500 500" id="bulldozer"><path d="M252.1 217c10.9 0 21.8 0 32.7 0 8.1 0 8.1-12.6 0-12.6-10.9 0-21.8 0-32.7 0C244 204.4 244 217 252.1 217zM252.1 241.8c10.9 0 21.8 0 32.7 0 8.1 0 8.1-12.6 0-12.6-10.9 0-21.8 0-32.7 0C244 229.1 244 241.8 252.1 241.8zM252.1 266.5c10.9 0 21.8 0 32.7 0 8.1 0 8.1-12.6 0-12.6-10.9 0-21.8 0-32.7 0C244 253.9 244 266.5 252.1 266.5zM367.9 340.7c0-21.2-17.2-38.4-38.4-38.4H81.3c-21.2 0-38.4 17.2-38.4 38.4 0 21.2 17.2 38.4 38.4 38.4h248.1C350.7 379 367.9 361.8 367.9 340.7zM355.3 340.7c0 14.2-11.6 25.8-25.8 25.8-14.2 0-25.8-11.6-25.8-25.8 0-14.2 11.6-25.8 25.8-25.8C343.7 314.9 355.3 326.4 355.3 340.7zM254.2 347.8c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9c0 4.9-4 8.9-8.9 8.9S254.2 352.7 254.2 347.8zM263 326.3c-11.8 0-21.5 9.6-21.5 21.5 0 8 4.4 14.9 10.8 18.6h-36.3c6.4-3.7 10.8-10.7 10.8-18.6 0-11.8-9.6-21.5-21.5-21.5-11.8 0-21.5 9.6-21.5 21.5 0 8 4.4 14.9 10.8 18.6h-36.3c6.4-3.7 10.8-10.7 10.8-18.6 0-11.8-9.6-21.5-21.5-21.5-11.8 0-21.5 9.6-21.5 21.5 0 8 4.4 14.9 10.8 18.6h-27.4c6.2-6.8 10-15.9 10-25.8 0-9.9-3.8-19-10-25.8h191.4c-6.2 6.8-10 15.9-10 25.8 0 9.9 3.8 19 10 25.8h-27.4c6.4-3.7 10.8-10.7 10.8-18.6C284.5 336 274.9 326.3 263 326.3zM196.5 347.8c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9c0 4.9-4 8.9-8.9 8.9S196.5 352.7 196.5 347.8zM138.9 347.8c0-4.9 4-8.9 8.9-8.9 4.9 0 8.9 4 8.9 8.9 0 4.9-4 8.9-8.9 8.9C142.9 356.7 138.9 352.7 138.9 347.8zM55.6 340.7c0-14.2 11.6-25.8 25.8-25.8 14.2 0 25.8 11.6 25.8 25.8 0 14.2-11.6 25.8-25.8 25.8C67.1 366.4 55.6 354.9 55.6 340.7z"></path><path d="M374.7 318.2l10.8 44.9c1.6 6.5 7.3 11.1 14 11.1h43c5.3 0 10.2-2.9 12.7-7.7 2.6-4.8 2.3-10.6-.8-15.1l-22.9-34c-.1-.2-.2-.4-.3-.7l-14.5-67.4c-1.4-6.6-7.4-11.5-14.1-11.5h-14.1c-8 0-14.4 6.5-14.4 14.6v12.1c-17.7 6-35.3 12-53 18-7.6 2.6-4.4 14.8 3.4 12.2 16.5-5.6 33.1-11.2 49.6-16.8v36.9C374.3 315.9 374.4 317 374.7 318.2zM386.9 252.4c0-1.1.8-2 1.8-2h14.1c.9 0 1.6.6 1.8 1.5l14.5 67.4c.4 1.8 1.1 3.5 2.2 5.1l22.9 34c.6.9.3 1.7.1 2.1-.2.4-.7 1-1.6 1h-43c-.8 0-1.6-.6-1.8-1.5l-10.9-44.9c0-.2-.1-.3-.1-.5V252.4zM116.3 289.5h179.8c13.6 0 24.7-11.1 24.7-24.7V210c0-13.6-11.1-24.7-24.7-24.7h-52.9c-6.3 0-11.5-4.7-12-11l-2.8-30.9c-1.2-12.8-11.7-22.5-24.6-22.5H122c-13.2 0-24 10.3-24.6 23.5l-5.7 119.2c-.3 6.8 2.1 13.3 6.8 18.2C103.2 286.7 109.5 289.5 116.3 289.5zM215.8 144.5l2.8 30.9c.3 3.3 1.2 6.4 2.7 9.2l-21.2 28.1c-3.4 4.5-8.7 7.1-14.3 7.1h-16.5v-86.3h34.5C210.1 133.6 215.3 138.3 215.8 144.5zM122 133.6h34.6v86.3h-50.3L110 145C110.3 138.6 115.6 133.6 122 133.6zM105.8 232.4h80c9.5 0 18.7-4.5 24.4-12.2l19.8-26.2c3.8 2.4 8.4 3.8 13.2 3.8h52.9c6.7 0 12.1 5.4 12.1 12.1v54.8c0 6.7-5.4 12.1-12.1 12.1H116.3c-3.3 0-6.4-1.3-8.7-3.7-2.3-2.4-3.5-5.6-3.3-8.9L105.8 232.4z"></path></svg>
        </div>
    )
}

export const Military = ({ size }: { size: Size }) => {
    setSize(size);
    return (
        <div className="scale-125 fill-content-dark-2">
            <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 492 492" viewBox="0 0 492 492" id="military-truck"><path d="M462,202.23c-1.95,0-3.81-1.15-4.61-3.07l-25.14-59.9h-47.66l-0.18,57.98c-0.01,2.76-2.25,4.98-5,4.98 c-0.01,0-0.01,0-0.02,0c-2.76-0.01-4.99-2.25-4.98-5.02l0.19-62.97c0.01-2.76,2.24-4.98,5-4.98h55.97c2.01,0,3.83,1.21,4.61,3.07 l26.43,62.97c1.07,2.55-0.13,5.48-2.67,6.54C463.3,202.11,462.65,202.23,462,202.23z"></path><path d="M348.5,202.24c-2.76,0-5-2.24-5-5v-50.52c0-9.63,7.83-17.46,17.47-17.46h18.63c2.76,0,5,2.24,5,5s-2.24,5-5,5h-18.63 c-4.12,0-7.47,3.35-7.47,7.46v50.52C353.5,200.01,351.26,202.24,348.5,202.24z"></path><path d="M313.01,235.54c-2.76,0-5-2.24-5-5c0-21.11,17.18-38.29,38.29-38.29h33.29c2.76,0,5,2.24,5,5s-2.24,5-5,5H346.3 c-15.6,0-28.29,12.69-28.29,28.29C318.01,233.3,315.77,235.54,313.01,235.54z"></path><path d="M312.97,279.61H159.94c-1.46,0-2.84-0.64-3.79-1.74c-10.3-11.98-25.25-18.85-41.03-18.85s-30.73,6.87-41.03,18.85 c-0.95,1.1-2.33,1.74-3.79,1.74H30c-2.76,0-5-2.24-5-5v-79.28c0-0.91,0.25-1.81,0.72-2.59l36.73-60.64 c0.91-1.5,2.53-2.41,4.28-2.41h246.24c2.76,0,5,2.24,5,5v139.92C317.97,277.37,315.73,279.61,312.97,279.61z M162.18,269.61 h145.79V139.69H69.54L35,196.72v72.88h33.07c12.13-13.11,29.14-20.59,47.06-20.59S150.06,256.5,162.18,269.61z"></path><path d="M115.12 362.74c-27.37 0-49.63-22.27-49.63-49.63 0-27.37 22.26-49.63 49.63-49.63s49.63 22.27 49.63 49.63C164.75 340.47 142.49 362.74 115.12 362.74zM115.12 273.47c-21.85 0-39.63 17.78-39.63 39.63 0 21.85 17.78 39.63 39.63 39.63s39.63-17.78 39.63-39.63C154.75 291.25 136.98 273.47 115.12 273.47zM366.22 362.74c-27.37 0-49.63-22.27-49.63-49.63 0-27.37 22.26-49.63 49.63-49.63 27.37 0 49.63 22.27 49.63 49.63C415.85 340.47 393.59 362.74 366.22 362.74zM366.22 273.47c-21.85 0-39.63 17.78-39.63 39.63 0 21.85 17.78 39.63 39.63 39.63 21.85 0 39.63-17.78 39.63-39.63C405.85 291.25 388.08 273.47 366.22 273.47z"></path><path d="M366.22 344.02c-17.05 0-30.92-13.87-30.92-30.92s13.87-30.92 30.92-30.92 30.92 13.87 30.92 30.92S383.27 344.02 366.22 344.02zM366.22 292.19c-11.53 0-20.92 9.38-20.92 20.92 0 11.53 9.38 20.92 20.92 20.92 11.53 0 20.92-9.38 20.92-20.92C387.14 301.57 377.76 292.19 366.22 292.19zM115.12 344.02c-17.05 0-30.92-13.87-30.92-30.92s13.87-30.92 30.92-30.92 30.92 13.87 30.92 30.92S132.17 344.02 115.12 344.02zM115.12 292.19c-11.53 0-20.92 9.38-20.92 20.92 0 11.53 9.38 20.92 20.92 20.92s20.92-9.38 20.92-20.92C136.04 301.57 126.66 292.19 115.12 292.19zM438.28 279.61h-27.57c-2.76 0-5-2.24-5-5s2.24-5 5-5h27.57c10.32 0 18.72-8.4 18.72-18.72v-48.66h-72.4v53.58c0 2.76-2.24 5-5 5s-5-2.24-5-5v-58.57c0-2.76 2.24-5.01 5-5.01H462c2.76 0 5 2.24 5 5v53.66C467 266.73 454.11 279.61 438.28 279.61z"></path><path d="M410.71 279.61c-1.4 0-2.79-.58-3.78-1.73-10.24-11.82-25.08-18.6-40.71-18.6-15.63 0-30.46 6.78-40.7 18.6-.95 1.1-2.33 1.73-3.78 1.73h-8.73c-2.76 0-5-2.24-5-5s2.24-5 5-5h6.5c12.06-12.95 28.96-20.33 46.71-20.33 18.53 0 36.12 8.04 48.26 22.06 1.81 2.09 1.58 5.24-.51 7.05C413.03 279.21 411.87 279.61 410.71 279.61zM281.35 162.31h-183c-2.76 0-5-2.24-5-5s2.24-5 5-5h183c2.76 0 5 2.24 5 5S284.11 162.31 281.35 162.31zM293.71 256.99h-114.5c-2.76 0-5-2.24-5-5s2.24-5 5-5h114.5c2.76 0 5 2.24 5 5S296.47 256.99 293.71 256.99z"></path></svg>
        </div>
    )
}

export const OilGas = ({ size }: { size: Size }) => {
    setSize(size);
    return (
        <div className="flip-y fill-content-dark-2">
            <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="tank-truck">
                    <path d="M12 48c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM37 48c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM49 48c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"></path><path d="M63,44h-5.547c-.869-1.055-1.901-1.918-3.051-2.57,3.159-.948,5.921-3.048,7.764-6.096,.646-1.069,1.124-2.24,1.421-3.453,2.089-8.553-4.029-16.235-12.087-16.83v-3.051c0-.552-.448-1-1-1h-7.5c-.552,0-1,.448-1,1v3h-3v-3c0-.552-.448-1-1-1h-7.5c-.552,0-1,.448-1,1v3.049c-3.23,.235-6.236,1.593-8.547,3.904-.76,.759-1.404,1.6-1.953,2.493v-.446c0-.552-.448-1-1-1H7c-1.596,0-3.103,.621-4.251,1.757-1.114,1.127-1.734,2.611-1.749,4.185l-1,9.005v18.053c0,.552,.448,1,1,1H5.701c1.139,2.413,3.575,4,6.299,4s5.168-1.591,6.301-4h12.4c1.139,2.413,3.575,4,6.299,4,2.548,0,4.775-1.373,6-3.413,1.225,2.04,3.452,3.413,6,3.413,2.728,0,5.168-1.591,6.301-4h7.699c.552,0,1-.448,1-1v-8c0-.552-.448-1-1-1Zm-6.808,1.602c1.183,1.568,1.808,3.435,1.808,5.398,0,.335-.023,.669-.059,1h-2.027c.048-.33,.086-.662,.086-1,0-3.86-3.14-7-7-7-2.548,0-4.775,1.373-6,3.413-1.225-2.04-3.452-3.413-6-3.413-3.86,0-7,3.14-7,7,0,.339,.038,.671,.086,1h-2.027c-.037-.331-.059-.665-.059-1,0-1.963,.625-3.83,1.81-5.4,1.713-2.288,4.334-3.6,7.19-3.6,1.951,0,3.818,.626,5.401,1.811,.355,.266,.843,.266,1.198,0,1.583-1.185,3.45-1.811,5.401-1.811,2.856,0,5.477,1.312,7.192,3.602Zm-25.499-3.602c-.792,.559-1.512,1.23-2.146,2h-9.547v-8.465c2.376,3.87,6.635,6.465,11.693,6.465Zm-11.693,4h8.208c-.792,1.538-1.208,3.236-1.208,5,0,.334,.02,.668,.05,1h-7.136c.048-.33,.086-.662,.086-1v-5ZM44,13h5.5v2h-5.5v-2Zm-7,0v2h-5.5v-2h5.5Zm-14.633,7.367c1.933-1.934,4.437-3.088,7.133-3.319v3.951c0,.552,.448,1,1,1s1-.448,1-1v-4h18v14c0,.552,.448,1,1,1s1-.448,1-1v-13.949c5.874,.509,10.5,5.446,10.5,11.449,0,3.074-1.196,5.962-3.367,8.133-1.933,1.934-4.437,3.088-7.133,3.319v-3.951c0-.552-.448-1-1-1s-1,.448-1,1v4H31.5v-14c0-.552-.448-1-1-1s-1,.448-1,1v13.949c-5.874-.509-10.5-5.446-10.5-11.449,0-3.074,1.196-5.962,3.367-8.133ZM5,36v2.18l-3,.6v-2.78h3Zm-2.883-2l.778-7H13v3.764l-1.618,3.236H2.117Zm-.117,6.82l4.196-.839c.467-.093,.804-.504,.804-.98v-3h5c.379,0,.725-.214,.894-.553l2.105-4.211v-5.236c0-.552-.448-1-1-1H3.141c.176-.683,.515-1.317,1.022-1.829,.764-.755,1.771-1.171,2.837-1.171h10v24.11c-1.272-1.3-3.042-2.11-5-2.11-3.86,0-7,3.14-7,7,0,.339,.038,.671,.086,1H2v-11.18Zm14.706,11.852c-.692,1.991-2.583,3.329-4.706,3.329s-4.013-1.337-4.71-3.343c-.192-.526-.29-1.083-.29-1.657,0-2.757,2.243-5,5-5s5,2.243,5,5c0,.574-.097,1.131-.294,1.671Zm20.294,3.329c-2.122,0-4.013-1.337-4.71-3.343-.192-.526-.29-1.083-.29-1.657,0-2.757,2.243-5,5-5s5,2.243,5,5-2.243,5-5,5Zm16.706-3.329c-.692,1.991-2.583,3.329-4.706,3.329-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,.574-.097,1.131-.294,1.671Zm8.294-.671h-2.05c.03-.332,.05-.666,.05-1,0-1.764-.416-3.463-1.208-5h3.208v6Z"></path><path d="M40.5,35c2.981,0,5.5-2.376,5.5-5.19,0-1.036-.314-2.036-.906-2.886l-3.77-5.49c-.373-.544-1.275-.544-1.648,0l-3.767,5.485c-.595,.855-.909,1.855-.909,2.891,0,1.396,.598,2.713,1.685,3.708,1.03,.942,2.421,1.482,3.815,1.482Zm-2.946-6.944l2.946-4.29,2.949,4.295c.36,.518,.551,1.123,.551,1.749,0,1.729-1.603,3.19-3.5,3.19-.901,0-1.799-.349-2.465-.958-.667-.611-1.035-1.403-1.035-2.232,0-.626,.19-1.23,.554-1.754Z"></path><circle cx="40.5" cy="30" r="1"></circle>
            </svg>
        </div>
    )
}
