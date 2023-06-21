import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
            <ListIcon as={EmailIcon}/>
              Email: mario@email.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repellendus laborum quisquam animi cupiditate commodi.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Lorem ipsum dolor, velit distinctio quis tempore repellat explicabo dignissimos fuga iusto officia!
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
            Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo repellendus laborum quisquam animi cupiditate commodi.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor, velit distinctio quis tempore repellat explicabo dignissimos fuga iusto officia!
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor, velit distinctio quis tempore repellat explicabo dignissimos fuga iusto officia!
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor, velit distinctio quis tempore repellat explicabo dignissimos fuga iusto officia!
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
