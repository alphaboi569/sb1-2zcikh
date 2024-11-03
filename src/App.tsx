import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { TaskList } from './components/TaskList';
import { ExamBuilder } from './components/ExamBuilder';
import { TaskViewer } from './components/TaskViewer';
import { ExamPreview } from './components/ExamPreview';
import { taskTypes } from './data/tasks';
import { TaskType, Subtask, ExamVariant } from './types';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(taskTypes);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
  const [selectedSubtask, setSelectedSubtask] = useState<Subtask | null>(null);
  const [examVariant, setExamVariant] = useState<ExamVariant | null>(null);

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, isExpanded: !task.isExpanded }
        : task
    ));
  };

  const handleTaskSelect = (taskId: string) => {
    setSelectedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const handleCreateExam = () => {
    const selectedSubtasks = tasks
      .filter(task => selectedTasks.includes(task.id))
      .flatMap(task => task.subtasks)
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    const variant: ExamVariant = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      tasks: selectedSubtasks,
    };

    setExamVariant(variant);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Подготовка к ЕГЭ по математике
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {examVariant ? (
              <ExamPreview
                variant={examVariant}
                onClose={() => setExamVariant(null)}
                onSubtaskSelect={setSelectedSubtask}
              />
            ) : (
              <TaskList
                tasks={tasks}
                onTaskToggle={handleTaskToggle}
                onSubtaskSelect={setSelectedSubtask}
              />
            )}
          </div>
          <div>
            <ExamBuilder
              tasks={tasks}
              selectedTasks={selectedTasks}
              onTaskSelect={handleTaskSelect}
              onCreateExam={handleCreateExam}
            />
          </div>
        </div>
      </main>

      <TaskViewer
        subtask={selectedSubtask}
        onClose={() => setSelectedSubtask(null)}
      />
    </div>
  );
}

export default App;