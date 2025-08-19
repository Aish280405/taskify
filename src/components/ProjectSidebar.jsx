import Button from './Button.jsx'

export default function Sidebar({onStart,projects,onSelectProject,selectedProject}){
    return (
			<aside className="bg-black text-stone-200 w-1/3 h-screen px-8 py-16 rounded-r-xl" >
				<h2 className="my-6 text-3xl font-bold font-pacifico ">YOUR PROJECTS</h2>
				<Button onClick={onStart}>
					+Add Project
				</Button>
				<ul className="mt-8">
					{projects.map((project) => {
					let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

					if (project.id === selectedProject) {
						cssClasses += ' bg-stone-800 text-stone-200'
					} else {
						cssClasses += ' text-stone-400'
					}

					return (
						<li key={project.id}>
						<button
							className={cssClasses}
							onClick={() => onSelectProject(project.id)}
						>
							{project.title}
						</button>
						</li>
					);
					})}
				</ul>
			</aside>
		);

}
