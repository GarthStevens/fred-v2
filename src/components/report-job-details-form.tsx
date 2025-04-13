'use client'

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "./ui/separator"
import { cn } from "@/lib/utils"

export function ReportJobDetailsForm() {
  const form = useForm({
    defaultValues: {
      propertyType: 'House',
      council: 'City of Newcastle',
      strataProvider: 'Strata Provider',
      writtenInfoProvider: 'Written Provider',
      verbalInfoProvider: 'Verbal Provider',
      constructionDate: new Date().toISOString().split('T')[0],
      settlementDate: new Date().toISOString().split('T')[0],
      firstUseDate: new Date().toISOString().split('T')[0],
      siteInspectionDate: new Date().toISOString().split('T')[0],
      purchasePrice: '$100,000',
      landValue: '$100,000',
      commonEntitlement: '50%',
      numberOfLevels: 1,
      numberOfUnits: 1,
    }
  })

  return (
    <Form {...form}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FormField
          name="propertyType"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="council"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Council</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="strataProvider"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Strata Provider</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="writtenInfoProvider"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Written Info Provider</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="verbalInfoProvider"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verbal Info Provider</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="purchasePrice"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Purchase Price</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="landValue"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Land Value</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="constructionDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Construction Date</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="settlementDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Settlement Date</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="firstUseDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Use Date</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="siteInspectionDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site Inspection Date</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="commonEntitlement"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Common Entitlement</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="numberOfLevels"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Levels</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="numberOfUnits"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Units</FormLabel>
              <FormControl>
                <Input {...field} readOnly />
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