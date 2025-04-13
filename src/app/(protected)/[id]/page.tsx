import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ReportPage() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex-1 overflow-y-scroll  p-4">
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Report Details</CardTitle>
              </CardHeader>

              <CardContent>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>

              <CardContent>

              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>

              <CardContent>

              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Calculation Summary</CardTitle>
              </CardHeader>

              <CardContent>

              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Tabs defaultValue="unit">
                  <TabsList>
                    <TabsTrigger value="unit">Unit Specific</TabsTrigger>
                    <TabsTrigger value="common">Common Property</TabsTrigger>
                  </TabsList>

                  <TabsContent value="unit">
                    Unit Assets
                  </TabsContent>

                  <TabsContent value="common">
                    Common Assets
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Sidebar side="right" variant="inset" collapsible="none">
        <SidebarHeader>Issues</SidebarHeader>
        <SidebarContent>

        </SidebarContent>
      </Sidebar>

    </div>
  );
}
