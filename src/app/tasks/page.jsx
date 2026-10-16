import TaskCard from "@/components/TaskCard";
import { getTasks } from "../lib/task";
import { AddTask } from "@/components/AddTask";
import { createATask } from "../lib/actions";
import Link from "next/link";
import { Button } from "@heroui/react";

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h1 className="pb-5">Task : {tasks.length}</h1>
            <AddTask createATask={createATask}></AddTask>
            <Link href="/tasks/new"><Button variant="secondary">Add Task</Button></Link>
            <div className="grid grid-cols-3 gap-4 pt-5">
                {
                    tasks.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;