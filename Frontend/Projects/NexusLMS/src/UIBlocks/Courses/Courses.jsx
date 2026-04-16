import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { MoreHorizontalIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { coursesData } from '@/dummyData/Dummy'

function Courses() {
  const [courses, setCourses] = useState(coursesData)
  const [editingCourse, setEditingCourse] = useState(null)
  const [draftValues, setDraftValues] = useState({ title: '', duration: '', price: '' })
  const [addSheetOpen, setAddSheetOpen] = useState(false)
  const [newCourse, setNewCourse] = useState({ title: '', duration: '6', price: '' })

  const startEdit = (course) => {
    setEditingCourse(course.title)
    setDraftValues({
      title: course.title,
      duration: course.duration,
      price: course.price,
    })
  }

  const handleDraftChange = (field, value) => {
    setDraftValues((prev) => ({
      ...prev,
      [field]: field === 'title' ? value : Number(value),
    }))
  }

  const handleSave = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.title === editingCourse
          ? {
              ...course,
              title: draftValues.title.trim() || course.title,
              duration: Number(draftValues.duration) || course.duration,
              price: Number(draftValues.price) || course.price,
            }
          : course
      )
    )
    setEditingCourse(null)
  }

  const handleCancel = () => {
    setEditingCourse(null)
    setDraftValues({ title: '', duration: '', price: '' })
  }

  const handleNewCourseChange = (field, value) => {
    setNewCourse((prev) => ({
      ...prev,
      [field]: field === 'title' ? value : value,
    }))
  }

  const handleAddCourse = (event) => {
    event.preventDefault()

    if (!newCourse.title.trim()) {
      return
    }

    setCourses((prev) => [
      ...prev,
      {
        title: newCourse.title.trim(),
        duration: Number(newCourse.duration) || 1,
        price: Number(newCourse.price) || 0,
      },
    ])

    setNewCourse({ title: '', duration: '6', price: '' })
    setAddSheetOpen(false)
  }

  return (
    <section className="mx-auto w-full max-w-full h-full space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm shadow-slate-200/20">
      <div className="flex flex-col gap-4 rounded-[1.75rem] border border-border bg-background/80 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Course overview</p>
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Available Courses</h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Browse the active courses and manage pricing, duration, and enrollment actions from a responsive table.
          </p>
        </div>
        <Sheet open={addSheetOpen} onOpenChange={setAddSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              Add course
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md">
            <SheetHeader>
              <SheetTitle>Add New Course</SheetTitle>
              <SheetDescription>
                Create a new course by providing a title, duration, and price.
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleAddCourse} className="space-y-4 p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="new-course-title">
                  Course title
                </label>
                <Input
                  id="new-course-title"
                  value={newCourse.title}
                  onChange={(event) => handleNewCourseChange('title', event.target.value)}
                  placeholder="Enter course name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="new-course-duration">
                  Duration (months)
                </label>
                <Input
                  id="new-course-duration"
                  type="number"
                  min="1"
                  value={newCourse.duration}
                  onChange={(event) => handleNewCourseChange('duration', event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="new-course-price">
                  Price (₹)
                </label>
                <Input
                  id="new-course-price"
                  type="number"
                  min="0"
                  value={newCourse.price}
                  onChange={(event) => handleNewCourseChange('price', event.target.value)}
                  placeholder="Enter price"
                />
              </div>

              <SheetFooter>
                <div className="flex items-center justify-end gap-2">
                  <SheetClose asChild>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                  </SheetClose>
                  <Button type="submit">
                    Save course
                  </Button>
                </div>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-border bg-background/80 shadow-sm w-full">
        <Table className="w-full min-w-[700px]">
          <TableCaption className="text-base font-medium text-foreground">
            List of current courses and details
          </TableCaption>

          <TableHeader>
            <TableRow className="bg-muted/70">
              <TableHead>Course name</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {courses.map((item, index) => {
              const isActiveEdit = editingCourse === item.title
              return (
                <TableRow
                  key={`${item.title}-${index}`}
                  className={isActiveEdit ? 'bg-muted/20' : ''}
                >
                  <TableCell className="font-medium text-foreground">
                    {isActiveEdit ? (
                      <input
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={draftValues.title}
                        onChange={(event) => handleDraftChange('title', event.target.value)}
                        aria-label="Edit course title"
                      />
                    ) : (
                      item.title
                    )}
                  </TableCell>

                  <TableCell>
                    {isActiveEdit ? (
                      <input
                        type="number"
                        min="1"
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={draftValues.duration}
                        onChange={(event) => handleDraftChange('duration', event.target.value)}
                        aria-label="Edit course duration"
                      />
                    ) : (
                      `${item.duration} months`
                    )}
                  </TableCell>

                  <TableCell>
                    {isActiveEdit ? (
                      <input
                        type="number"
                        min="0"
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        value={draftValues.price}
                        onChange={(event) => handleDraftChange('price', event.target.value)}
                        aria-label="Edit course price"
                      />
                    ) : (
                      `₹${item.price.toLocaleString()}`
                    )}
                  </TableCell>

                  <TableCell className="text-right space-x-2">
                    {isActiveEdit ? (
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="secondary" onClick={handleCancel}>
                          Cancel
                        </Button>
                        <Button size="sm" onClick={handleSave}>
                          Save
                        </Button>
                      </div>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <MoreHorizontalIcon />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => startEdit(item)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() =>
                              setCourses((prevCourses) =>
                                prevCourses.filter((course) => course.title !== item.title)
                              )
                            }
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}

export default Courses