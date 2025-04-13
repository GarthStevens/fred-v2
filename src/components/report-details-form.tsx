'use client'

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "./ui/separator"

export function ReportDetailsForm() {
  const form = useForm({
    defaultValues: {
      numberOfYearsInSchedule: 40,
      useOldLegislation: false,
      notionalWriteDownYears: 10,
      notionalWriteDownRate: '3%',
      notionalWriteDownGovernor: '50%',
      expenditureGovernor: '40%',
      preliminaryFees: '10%',
      consultancyFees: '5%',
      backClaimYears: 2,

    }
  })

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FormField
          name="numberOfYearsInSchedule"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Years in Schedule</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

      </div>

      <div className="mt-6">
        <Separator className="my-4" />
        <h3 className="text-md font-semibold mb-4">Property Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Address fields would go here */}
        </div>
      </div>

      <div className="mt-6">
        <Separator className="my-4" />
        <h3 className="text-md font-semibold mb-4">Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Contacts fields would go here */}
        </div>
      </div>
    </Form>
  )
}