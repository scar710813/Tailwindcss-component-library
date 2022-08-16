import { VStack } from "@chakra-ui/react";
import { CTA, ComponentSection, ComponentGrid } from "@/components/Landing";
import "@superui/styles/dist/index.css";

export default function Docs() {
  return (
    <VStack bgImage="url(../img/bgpattern.png)" bgSize="auto" bgRepeat="repeat">
      <CTA />
      <ComponentSection />
      <ComponentGrid />
    </VStack>
  );
}
