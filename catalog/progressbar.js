import './style/progressbar.less';

var ProgressBar = React.createClass({
    propTypes: {
        show: React.PropTypes.bool,
        progress: React.PropTypes.string,
        hint: React.PropTypes.string,
        className: React.PropTypes.string,
    },

    getDefaultProps: function() {
        return {
            show: true,
            hint: '',
            className: '',
        };
    },

    render: function() {
        return (
            <div className={'progressBarContainer ' + this.props.className + (this.props.show ? '' : ' hidden')}>
                <div className="progressBar">
                    <div className="percent"
                        style={{width: this.props.progress}}>
                    </div>
                </div>
                <div className={'hint ' + (this.props.hint ? '' : 'hidden')}>
                    {this.props.hint}
                </div>
            </div>
        );
    },
});

module.exports = ProgressBar;