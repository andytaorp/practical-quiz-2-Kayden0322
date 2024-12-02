import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li
      style={{
        textDecoration: habit.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
      />
      {habit.name}
      <button onClick={() => onDeleteHabit(habit.id)}>delete</button>
    </li>
  );
}
