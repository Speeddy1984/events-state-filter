import { Component } from "react";
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export class Portfolio extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
         selectedFilter: 'All',
         projects: props.data
        };
    }

    handleSelectFilter = (filter) => {
        this.setState({ selectedFilter: filter });
    }

    getFilteredProjects() {
        const { selectedFilter, projects } = this.state;
        if (selectedFilter === 'All') {
         return projects;
        }
        return projects.filter(project => project.category === selectedFilter);
    }

    getUniqueFilters() {
        const categories = this.props.data.map(project => project.category);
        return ['All', ...Array.from(new Set(categories))];
    }
    
    render() {
        const filters = this.getUniqueFilters();
        const filteredProjects = this.getFilteredProjects();
    
        return (
         <div>
            <Toolbar
             filters={filters}
             selected={this.state.selectedFilter}
             onSelectFilter={this.handleSelectFilter}
            />
            <ProjectList projects={filteredProjects} />
         </div>
        );
    }
}

export default Portfolio;