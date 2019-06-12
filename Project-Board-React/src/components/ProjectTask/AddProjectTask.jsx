import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addProjectTask } from "../../actions/projectTaskActions"

class AddProjectTask extends Component {
    constructor() {
        super();
        this.state = {
            summary: "",
            acceptanceCriteria: "",
            status: ""
        };
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        };
        this.props.addProjectTask(newProjectTask, this.props.history);
    }

    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <form
                            onSubmit={this.onSubmit}
                            >
                                <div className="form-group">
                                    <input 
                                    className="form-control form-control-lg" 
                                    placeholder="Project Task summary" 
                                    type="text" 
                                    name="summary" 
                                    value={this.state.summary}
                                    onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    placeholder="Acceptance Criteria" 
                                    name="acceptanceCriteria"
                                    value={this.state.acceptanceCriteria}
                                    onChange={this.onChange}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <select 
                                    className="form-control form-control-lg" 
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddProjectTask.propTypes = {
    AddProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(null, {addProjectTask})(AddProjectTask);