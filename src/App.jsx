import Sidebar from "./components/ProjectSidebar";
import NewProject from "./components/newProject";
import NoProject from "./components/NoSelectedProject";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [newProject, setNewProject] = useState({
    selectedProject: undefined,
    projects: [],
    tasks:[]
  });
  function handleAddTask(text){
    setNewProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  function handleDeleteTask(id){
    setNewProject((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  };

  function handleSelectProject(id) {
    setNewProject((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleStartAddProj() {
    setNewProject((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setNewProject((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setNewProject((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  const selected = newProject.projects.find(
    (project) => project.id === newProject.selectedProject
  );

  let content = <SelectedProject project={selected}
   onDelete={handleDeleteProject} onAddTask={handleAddTask} 
   onDeleteTask={handleDeleteTask} tasks={newProject.tasks} />;

  if (newProject.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (newProject.selectedProject === undefined) {
    content = <NoProject onStart={handleStartAddProj} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStart={handleStartAddProj}
        projects={newProject.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
