import React from "react";

class Detail extends React.Component {
    // Link는 항상 props를 준다 이것을 설정 하려면
    // Movie.js를 보면 됩니다.
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/"); // "/"로 이동해라
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;