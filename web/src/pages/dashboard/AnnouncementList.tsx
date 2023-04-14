import { IconDotsVertical, IconEdit } from '@tabler/icons-solidjs';
import { Component, For, createSignal } from 'solid-js';

interface Announcement {
  firstName: string;
  lastName: string;
  callsign: number;
  image: string;
  content: string;
  createdAt: Date;
}

const ANNOUNCEMENTS: Announcement[] = [
  {
    firstName: 'John',
    lastName: 'Smith',
    callsign: 132,
    image: '',
    content: 'This is a very important announcement lmao',
    createdAt: new Date(),
  },
  {
    firstName: 'Peter',
    lastName: 'Pan',
    callsign: 233,
    image: '',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aperiam neque ratione consectetur in ullam voluptatum, quod eos velit fugiat iste aspernatur dolores vero nihil nam earum magnam incidunt illo dolore. Repellendus quaerat minus obcaecati harum repellat est, iusto consectetur deleniti nesciunt vel officia dolores placeat commodi neque dignissimos fugiat.',
    createdAt: new Date(),
  },
];

const AnnouncementList: Component = () => {
  const [announcements, setAnnouncements] = createSignal<Announcement[]>(ANNOUNCEMENTS);

  return (
    <div class="flex flex-col gap-2">
      <For each={announcements()}>
        {(announcement) => (
          <div class="flex flex-col gap-3 rounded-md bg-durple-200 p-3 text-dark-200 shadow-md">
            <div class="flex items-center justify-between">
              <div>
                <p>{`${announcement.firstName} ${announcement.lastName} · ${announcement.callsign}`}</p>
                <p class="text-xs">{announcement.createdAt.toLocaleDateString()}</p>
              </div>
              <button class="rounded-md p-2 text-sm hover:bg-durple-50 hover:text-white">
                <IconEdit />
              </button>
            </div>
            <div class="text-sm text-dark-50">{announcement.content}</div>
          </div>
        )}
      </For>
    </div>
  );
};

export default AnnouncementList;
